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

# SPELL TABLE
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

# Element Table
class Elements(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    Main = db.Column(db.String, nullable=False)
    Fire = db.Column(db.String, nullable=False)
    Water = db.Column(db.String, nullable=False)
    Air = db.Column(db.String, nullable=False)
    Earth = db.Column(db.String, nullable=False)
    
    def __init__(self, Main, Fire, Water, Air, Earth):
        self.Main = Main
        self.Fire = Fire
        self.Water = Water
        self.Air = Air
        self.Earth = Earth
        
class ElementSchema(ma.Schema):
    class Meta:
        fields = ("id", "Main","Fire", "Water", "Air", "Earth")

element_schema = ElementSchema()
elements_schema = ElementSchema(many=True)
        



# Form table
class FormElement(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    element = db.Column(db.String, nullable=False)
    shot = db.Column(db.String, nullable=False)
    beam = db.Column(db.String, nullable=False)
    wall = db.Column(db.String, nullable=False)

    def __init__(self, element, shot, beam, wall):
        self.element = element
        self.shot = shot
        self.beam = beam
        self.wall = wall
        

class FormElementSchema(ma.Schema):
    class Meta:
        fields = ("id", "element", "shot", "beam", "wall")

formElement_schema = FormElementSchema()
formElements_schema = FormElementSchema(many=True)


# ROUTES
@app.route("/add-spell", methods=["POST"])
def add_spell():
    spellname = request.json.get("spellname")
    description = request.json.get("description")
    attackmod = request.json.get("attackmod")
    defencemod = request.json.get("defencemod")
    specialeffect = request.json.get("specialeffect")
    

    record = Spells(spellname, description, attackmod, defencemod, specialeffect)
    
    db.session.add(record)
    db.session.commit()

    return jsonify(spell_schema.dump(record))

@app.route("/add-Elements", methods=["POST"])
def add_Elements():
    Main = request.json.get("Main")
    Fire = request.json.get("Fire")
    Water = request.json.get("Water")
    Air = request.json.get("Air")
    Earth = request.json.get("Earth")
    
    

    record = Elements(Main, Fire, Water, Air, Earth)
    
    db.session.add(record)
    db.session.commit()

    return jsonify(element_schema.dump(record))




@app.route("/add-FormElement", methods=["POST"])
def add_FormElement():
    element = request.json.get("element")
    shot = request.json.get("shot")
    beam = request.json.get("beam")
    wall = request.json.get("wall")
    
    

    record = FormElement(element, shot, beam, wall)
    
    db.session.add(record)
    db.session.commit()

    return jsonify(formelement_schema.dump(record))

@app.route("/<table>/<row>/<column>", methods=["GET"])
def get_an_element(table, row, column):
    main_element = db.query.get(table)
    second_element = table.query.get(row)
    combined_element = row.query.get(column) 
    return element_schema.jsonify(combined_element)

@app.route("/Elements", methods=["GET"])
def get_all_elements():
    all_elements = Elements.query.all()
    return jsonify(element_schema.dump(all_elements))
    
    
@app.route("/spells", methods=["GET"])
def get_all_spells():
    all_spells = Spells.query.all()
    return jsonify(spells_schema.dump(all_spells))



@app.route("/FormElement", methods=["GET"])
def get_all_FormElement():
    all_FormElement = FormElement.query.all()
    return jsonify(formelement_schema.dump(all_FormElement))



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
    
@app.route("/Elements/<id>", methods=["DELETE","GET","PUT"])
def Element_id(id):
    Element = Elements.query.get(id)
    if request.method == "DELETE":
        db.session.delete(Element)
        db.session.commit()
    
        return Element_schema.jsonify(Elements)
    elif request.method == "PUT":
        Main = request.json['Main']
        Fire = request.json['Fire']
        Water = request.json['Water']
        Air = request.json['Air']
        Earth = request.json['Earth']
       

        Elements.Main = Main
        Elements.Fire = Fire
        Elements.Water = Water
        Elements.Air = Air
        Elements.Earth = Earth

        db.session.commit()
        return element_schema.jsonify(Elements)
    elif request.method == "GET":
        return element_schema.jsonify(Elements)
    




if __name__ == "__main__":
    app.run(debug=True)