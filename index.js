class Entity {
  constructor(name) {
    this._name = name;
  }
  set name(name) {
    this._name = name.trim();
  }

  get name() {
    return this._name;
  }
}

class Stuff extends Entity {
  constructor(name, stuff) {
    super(name);
    this.stuff = stuff;
  }
  
  addStuff(stuff) {
    this.stuff.push(stuff);
  }
}

class Box extends Stuff {
  constructor(name, boxSize, stuff) {
    super(name, stuff);
    if (stuff.length > boxSize) {
      throw new Error('Box size overflowed');
    }
    this.boxSize = boxSize;
  }

  addStuff(stuff) {
    if (this.stuff.length >= this.boxSize) {
      throw new Error('Box size overflowed');
    }
    this.stuff.push(stuff);
  }
}

class User extends Entity {
  constructor(name, surname, userID) {
    super(name);
    this.surname = surname;
    this.userID = userID;
    this.boxStorage = {};
  }

  createBox (name, stuff) {
    this.boxStorage[name] = stuff;
  }
}


const entity = new Entity('stuff');
console.log(entity);

const computerThings = new Stuff('PC stuff', ['keyboard', 'mouse', 'screen']);
computerThings.addStuff('webcam');
console.log(computerThings);

const thingsBox = new Box('Things Box', 3, ['spoon', 'knife']);
thingsBox.addStuff('fork');
console.log(thingsBox); 

const userAlex = new User('Alex', 'Chrks', 125789);
userAlex.createBox('music', ['country', 'edm', 'rock'])
userAlex.createBox('pictures', ['png', 'jpg', 'svg'])
console.log(userAlex);
