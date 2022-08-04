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

fireelement_schema = FireElementSchema()
fireelements_schema = FireElementSchema(many=True)

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

waterelement_schema = WaterElementSchema()
waterelements_schema = WaterElementSchema(many=True)
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

airElement_schema = AirElementSchema()
airElements_schema = AirElementSchema(many=True)

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

earthElement_schema = EarthElementSchema()
earthElements_schema = EarthElementSchema(many=True)

@app.route("/add-FireElement", methods=["POST"])
def add_FireElement():
    blank = request.json.get("blank")
    water = request.json.get("water")
    air = request.json.get("air")
    earth = request.json.get("earth")
    
    

    record = FireElement(blank, water, air, earth)
    
    db.session.add(record)
    db.session.commit()

    return jsonify(fireelement_schema.dump(record))


@app.route("/add-WaterElement", methods=["POST"])
def add_WaterElement():
    blank = request.json.get("blank")
    fire = request.json.get("fire")
    air = request.json.get("air")
    earth = request.json.get("earth")
    
    

    record = WaterElement(blank, fire, air, earth)
    
    db.session.add(record)
    db.session.commit()

    return jsonify(waterelement_schema.dump(record))

@app.route("/add-AirElement", methods=["POST"])
def add_AirElement():
    blank = request.json.get("blank")
    fire = request.json.get("fire")
    water = request.json.get("water")
    earth = request.json.get("earth")
    
    

    record = AirElement(blank, fire, water, earth)
    
    db.session.add(record)
    db.session.commit()

    return jsonify(airelement_schema.dump(record))

@app.route("/add-EarthElement", methods=["POST"])
def add_EarthElement():
    blank = request.json.get("blank")
    fire = request.json.get("fire")
    water = request.json.get("water")
    air = request.json.get("air")
    
    

    record = EarthElement(blank, fire, water, air)
    
    db.session.add(record)
    db.session.commit()

    return jsonify(earthelement_schema.dump(record))

@app.route("/FireElement", methods=["GET"])
def get_all_FireElement():
    all_FireElement = FireElement.query.all()
    return jsonify(fireelement_schema.dump(all_FireElement))

@app.route("/WaterElement", methods=["GET"])
def get_all_WaterElement():
    all_WaterElement = WaterElement.query.all()
    return jsonify(waterelement_schema.dump(all_WaterElement))

@app.route("/AirElement", methods=["GET"])
def get_all_AirElement():
    all_AirElement = AirElement.query.all()
    return jsonify(airelement_schema.dump(all_AirElement))

@app.route("/EarthElement", methods=["GET"])
def get_all_EarthElement():
    all_EarthElement = EarthElement.query.all()
    return jsonify(earthelement_schema.dump(all_EarthElement))