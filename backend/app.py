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

# FIRE TABLE
class FireElement(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    blank = db.Column(db.String, nullable=False)
    water = db.Column(db.String, nullable=False)
    air = db.Column(db.String, nullable=False)
    earth = db.Column(db.String, nullable=False)

def __init__(self, blank, water, air, earth):
    self.blank = blank
    self.water = water
    self.air = air
    self.earth = earth
        

class FireElementSchema(ma.Schema):
    class Meta:
        fields = ("id", "blank", "water", "air", "earth")

FireElement_schema = FireElementSchema()
FireElements_schema = FireElementSchema(many=True)

# water table
class WaterElement(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    blank = db.Column(db.String, nullable=False)
    fire = db.Column(db.String, nullable=False)
    air = db.Column(db.String, nullable=False)
    earth = db.Column(db.String, nullable=False)

def __init__(self, blank, fire, air, earth):
    self.blank = blank
    self.fire = fire
    self.air = air
    self.earth = earth
        

class WaterElementSchema(ma.Schema):
    class Meta:
        fields = ("id", "blank", "fire", "air", "earth")

WaterElement_schema = WaterElementSchema()
WaterElements_schema = WaterElementSchema(many=True)
# Air Table
class AirElement(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    blank = db.Column(db.String, nullable=False)
    fire = db.Column(db.String, nullable=False)
    water = db.Column(db.String, nullable=False)
    earth = db.Column(db.String, nullable=False)

def __init__(self, blank, fire, water, earth):
    self.blank = blank
    self.fire = fire
    self.water = water
    self.earth = earth
        

class AirElementSchema(ma.Schema):
    class Meta:
        fields = ("id", "blank", "fire", "water", "earth")

AirElement_schema = AirElementSchema()
AirElements_schema = AirElementSchema(many=True)

# Earth table
class EarthElement(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    blank = db.Column(db.String, nullable=False)
    fire = db.Column(db.String, nullable=False)
    water = db.Column(db.String, nullable=False)
    air = db.Column(db.String, nullable=False)

def __init__(self, blank, fire, water, air):
    self.blank = blank
    self.fire = fire
    self.water = water
    self.air = air
        

class EarthElementSchema(ma.Schema):
    class Meta:
        fields = ("id", "blank", "fire", "water", "air")

EarthElement_schema = EarthElementSchema()
EarthElements_schema = EarthElementSchema(many=True)

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

FormElement_schema = FormElementSchema()
FormElements_schema = FormElementSchema(many=True)


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




@app.route("/add-FireElement", methods=["POST"])
def add_FireElement():
    blank = request.json.get("blank")
    water = request.json.get("water")
    air = request.json.get("air")
    earth = request.json.get("earth")
    
    

    record = FireElement(blank, water, air, earth)
    
    db.session.add(record)
    db.session.commit()

    return jsonify(FireElement_schema.dump(record))


@app.route("/add-WaterElement", methods=["POST"])
def add_WaterElement():
    blank = request.json.get("blank")
    fire = request.json.get("fire")
    air = request.json.get("air")
    earth = request.json.get("earth")
    
    

    record = WaterElement(blank, fire, air, earth)
    
    db.session.add(record)
    db.session.commit()

    return jsonify(WaterElement_schema.dump(record))

@app.route("/add-AirElement", methods=["POST"])
def add_AirElement():
    blank = request.json.get("blank")
    fire = request.json.get("fire")
    water = request.json.get("water")
    earth = request.json.get("earth")
    
    

    record = AirElement(fire, water, earth)
    
    db.session.add(record)
    db.session.commit()

    return jsonify(AirElement_schema.dump(record))

@app.route("/add-EarthElement", methods=["POST"])
def add_EarthElement():
    blank = request.json.get("blank")
    fire = request.json.get("fire")
    water = request.json.get("water")
    air = request.json.get("air")
    
    

    record = EarthElement(blank, fire, water, air)
    
    db.session.add(record)
    db.session.commit()

    return jsonify(EarthElement_schema.dump(record))

@app.route("/add-FormElement", methods=["POST"])
def add_FormElement():
    element = request.json.get("element")
    shot = request.json.get("shot")
    beam = request.json.get("beam")
    wall = request.json.get("wall")
    
    

    record = FormElement(element, shot, beam, wall)
    
    db.session.add(record)
    db.session.commit()

    return jsonify(FormElement_schema.dump(record))

@app.route("/spells", methods=["GET"])
def get_all_spells():
    all_spells = Spells.query.all()
    return jsonify(spells_schema.dump(all_spells))

@app.route("/FireElement", methods=["GET"])
def get_all_FireElement():
    all_FireElement = FireElement.query.all()
    return jsonify(FireElement_schema.dump(all_FireElement))

@app.route("/WaterElement", methods=["GET"])
def get_all_WaterElement():
    all_WaterElement = WaterElement.query.all()
    return jsonify(WaterElement_schema.dump(all_WaterElement))

@app.route("/AirElement", methods=["GET"])
def get_all_AirElement():
    all_AirElement = AirElement.query.all()
    return jsonify(AirElement_schema.dump(all_AirElement))

@app.route("/EarthElement", methods=["GET"])
def get_all_EarthElement():
    all_EarthElement = EarthElement.query.all()
    return jsonify(EarthElement_schema.dump(all_EarthElement))

@app.route("/FormElement", methods=["GET"])
def get_all_FormElement():
    all_FormElement = FormElement.query.all()
    return jsonify(FormElement_schema.dump(all_FormElement))



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