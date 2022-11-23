class Animal { }

class Bird extends Animal {
  chirp() { }
}

class Crow extends Bird {
  caw() { }
}

function chirp(bird: Bird): Bird {
  bird.chirp()
  return bird
}

// chirp(new Animal) error
chirp(new Bird)
chirp(new Crow)

function clone(f: (b: Bird) => Bird): void {
  let parent = new Bird
  let babyBird = f(parent)
  babyBird.chirp()
}

function birdToBird(b: Bird): Bird {
  return b
}

clone(birdToBird)
