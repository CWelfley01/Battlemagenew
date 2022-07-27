from pydoc import describe
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
import os

app = Flask(__name__)

basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'app.sqlite')

db = SQLAlchemy(app)
ma = Marshmallow(app)

CORS(app)


class Spells(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    spellname = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    attackmod = db.Column(db.Integer, nullable=False)
    defencemod = db.Column(db.Integer, nullable=False)
    specialeffect = db.Column(db.String, nullable=False)
    

    def __init__(self, spellname, description, attackmod, defencemod, specialeffect ):
        self.spellname = spellname
        self.description = description
        self.attackmod = attackmod
        self.defencemod = defencemod
        self.specialeffect = specialeffect
        

class SpellSchema(ma.Schema):
    class Meta:
        fields = ("id", "spellname", "description", "attackmod", "defencemod", "specialeffect")

spell_schema = SpellSchema()
spells_schema = SpellSchema(many=True)

@app.route("/add-spell", methods=["POST"])
def add_spell():
    spell = request.json.get("spell")
    description = request.json.get("description")
    attackmod = request.json.get("attackmod")
    defencemod = request.json.get("defencemod")
    specialeffect = request.json.get("specialeffect")
    

    record = Spells(spellname, description, attackmod, defencemod, specialeffect)
    
    db.session.add(record)
    db.session.commit()

    return jsonify(spell_schema.dump(record))


@app.route("/spells", methods=["GET"])
def get_all_spells():
    all_spells = Spells.query.all()
    return jsonify(spells_schema.dump(all_spells))

@app.route("/spell/<id>", methods=["DELETE","GET","PUT"])
def spell_id(id):
    spell = Spells.query.get(id)
    if request.method == "DELETE":
        db.session.delete(spell)
        db.session.commit()
    
        return spell_schema.jsonify(spell)
    elif request.method == "PUT":
        spellname = request.json['spellname']
        attackmod = request.json['attackmod']
        defencemod = request.json['defencemod']
        description = request.json['description']
        specialeffect = request.json['specialeffect']
       

        spell.spellname = spellname
        spell.attackmod = attackmod
        spell.defencemod = defencemod
        spell.description = description
        spell.specialeffect = specialeffect

        db.session.commit()
        return spell_schema.jsonify(spell)
    elif request.method == "GET":
        return spell_schema.jsonify(spell)



if __name__ == "__main__":
    app.run(debug=True)