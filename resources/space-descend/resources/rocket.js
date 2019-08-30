let rocket;
let terrain;
// let stars;
let bg;

function setup() {
	let imageName = "canvas" + int(random(1,27)).toString() + ".jpg";
	bg = loadImage("resources/pictures/" + imageName);
	createCanvas(800, 800);
	rocket = new Rocket(width/2, height/8, 6, 65);
	terrain = new Terrain();
	// stars = new Stars(50);
}

function draw() {
	background(bg);
	// stars.display();

	detectKeyPress();
	
	terrain.display();  
	
	rocket.update();
	rocket.display();
	
	if (rocket.isAlive) {
		detectCollission();
	}
}

// function Stars(count) {
// 	this.starList = new Array(count);

// 	for (let i = 0; i < count; i++) {
// 		x     = random(0, width);
// 		y     = random(0, height/4);
// 		sides = random(5, 8);
// 		rad1  = random(2, 4);
// 		rad2  = rad1 + random(2, 6);
// 		this.starList[i] = [x, y, sides, rad1, rad2];
// 	}

// 	this.display = function() {
// 		for (let i = 0; i < this.starList.length; i++) {
// 			//push();
// 			stroke(15, 70, 166);
// 			strokeWeight(1.2);
// 			fill(255, 255, 255);
// 			//translate(this.starList[i][0], this.starList[i][1]);
// 			//rotate(frameCount / 200.0);
// 			this.drawStar(this.starList[i][0], this.starList[i][1], this.starList[i][2], this.starList[i][3], this.starList[i][4]);
// 			//pop();
// 		}
// 	}

// 	this.drawStar = function(x, y, radius1, radius2, npoints) {
// 		let angle = TWO_PI / npoints;
// 		let halfAngle = angle / 2.0;
// 		beginShape();
// 		for (let a = 0; a < TWO_PI; a += angle) {
// 			let sx = x + cos(a) * radius2;
// 			let sy = y + sin(a) * radius2;
// 			vertex(sx, sy);
// 			sx = x + cos(a + halfAngle) * radius1;
// 			sy = y + sin(a + halfAngle) * radius1;
// 			vertex(sx, sy);
// 		}
// 		endShape(CLOSE);
// 	}
// }






function detectCollission() {
	if (rocket.isCollissionWithTerrain(terrain)) {
		//print("Collission");
		rocket.explode();
		terrain.shake();
		return true;
	}
	else {
		return false;
	}
}


function Terrain() {
	this.noiseScale    = random(0.01, 0.02);
	this.rx            = random(-width, width);
	this.ry            = random(height/1.2, height/1.4);
	this.lineList      = [];
	this.quakeDuartion = 0;
	
	for (let x = 0; x < width; x++) {
		let noiseVal = noise((this.rx+x)*this.noiseScale, this.ry*this.noiseScale);
		lineVar = [x, this.ry+noiseVal*80, x, height, noiseVal*255, 85, 77];
		// lineVar = [x, this.ry+noiseVal*80, x, height, 94, noiseVal*255, 35];
		this.lineList.push(lineVar);
	}
	
	this.display = function() {
		for (let i = 0; i < this.lineList.length; i++) {
			stroke(this.lineList[i][4], this.lineList[i][5], this.lineList[i][6]);
			if (this.quakeDuration > 0) {
				rx =  0;
				ry =  random(-6, 6);
				line(this.lineList[i][0] + rx, this.lineList[i][1] + ry, this.lineList[i][2] + rx, this.lineList[i][3] + 0);
				this.quakeDuration--;
			}
			else {
				line(this.lineList[i][0], this.lineList[i][1], this.lineList[i][2], this.lineList[i][3]);
			}
		}
	}
	
	this.shake = function() {
		this.quakeDuration = 40000;
	}
}



function Rocket(initX, initY, w, h) {
	this.isAlive                     = true;
	
	this.width                       = w;
	this.height                      = h;
	
	this.speedMultiplier			 = 0.9;

	this.pos                         = createVector(initX, initY);
	this.vel                         = createVector(0, -1);
	this.acc                         = createVector();
	
	this.thurst                      = createVector();
	this.regularTopSpeed             = 5 * this.speedMultiplier;
	this.flappedTopSpeed             = 2 * this.speedMultiplier;
	
	this.isAccelerating              = false;
	
	this.minGravityForceVec          = 0.075 * this.speedMultiplier;
	this.minPositionalGravity        = 1.5 * this.speedMultiplier;
	this.maxPositionalGravity        = 0.001 * this.speedMultiplier;
	this.currentPositionalGravity    = this.minPositionalGravity * this.speedMultiplier;
	this.freeFallTime                = 0;
	this.gravity                     = createVector(0, this.minGravityForceVec);
	
	this.regularThurstForce          = 0.025 * this.speedMultiplier;
	this.regularBreakForce           = 0.01 * this.speedMultiplier;
	this.landingAngleThurstForce     = 0.0003 * this.speedMultiplier;
	this.landingAngleBreakForce      = 0.005 * this.speedMultiplier;
	
	this.isCombusting                = false;
	this.ongoingAccelerationTime     = 0;
	this.combustLineVecList          = new Array(120);
	this.currentCombustLineLen       = 0;
	this.maxCombustLineLen           = 25;
	
	this.capHeight                   = 15;
	this.capWidth                    = w + 2;
	this.tailHeight                  = 20;
	this.tailWidth                   = w + 5;
	this.bodyHeight                  = h - this.tailHeight;
	this.bodyWidth                   = w;
	
	this.isExploding                 = false;
	this.currentExplosionRadius      = 0;
	this.maxExplosionRadius          = 400;
	
	this.areFlapsDeployed            = false;
	
	this.vel.rotate(random(-PI/2, PI/2));
	this.vel.setMag(5 * this.speedMultiplier);

	
	this.getColliderRectList = function() {
		let colliderRectList =  [
									[(this.bodyHeight/2 + this.capHeight/2), this.capWidth/32, this.capWidth, this.capHeight/2],
									[0, 0, this.bodyHeight, this.bodyWidth],
									[(-this.height + this.tailHeight)/2, 0, this.bodyWidth + this.tailWidth + 2, this.tailHeight]
								];
		return colliderRectList;
	}

	this.isCollissionWithTerrain = function(terr) {
		if (this.hasLanded(terr)) {
			fill(255, 255, 255);
			textSize(16);
			textFont('Trebuchet MS');
			x = width/2.5;
			y = height/2;
			let strList = ["Houston, the Eagle has landed", "I repeat, THE EAGLE HAS LANDED.", "Good job Maisha!"];
			for (let i = 0; i < strList.length; i++) {
				text(strList[i], x, y);
				y += 25;
			}
			noLoop();
		}
				
		push();
		
		translate(this.pos.x, this.pos.y);
		
		let colliderRectList = this.getColliderRectList();
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < terr.lineList.length; j++) {
				x1 = terr.lineList[j][0] - this.pos.x;
				y1 = terr.lineList[j][1] - this.pos.y;
				
				x2 = colliderRectList[i][0];
				y2 = colliderRectList[i][1];
				
				w  = colliderRectList[i][2];
				h = colliderRectList[i][3];
				
				doesContain = (x2 < x1 && x1 <= x2 + w - 2 && y2 < y1 && y1 <= y2 + h - 2);
		
				if (doesContain) {
					return true;
				}
			}
		}
		
		pop();
			
		return false;
	}
	
	
	this.isHeadingWithinLandingAngle = function() {
		if (this.vel.heading() >= -1.65 && this.vel.heading() <= -1.50) {
			return true;    
		}
		else {
			return false;
		}
	}
	
	
	this.hasLanded = function(terr) {
		if (!this.isHeadingWithinLandingAngle() || this.freeFallTime > 100 || !this.areFlapsDeployed) {
			return false;
		}
		
		push();
		
		translate(this.pos.x, this.pos.y);
		
		let colliderRectList = this.getColliderRectList();
		
		let landingPoints = [];
		let touchCount = 0;
		
		let x = colliderRectList[2][0];
		let y = colliderRectList[2][1];
		let w = colliderRectList[2][3];
		let h = colliderRectList[2][4];
		
		let landingXStart = - w/2;
		let landingXEnd   =  w/2;
		let landingY      = this.bodyHeight/2 + this.tailHeight/2;
		
		for (let i = landingXStart; i <= landingXEnd; i+=1) {
			let p = [i, landingY];
			//print(p);
			landingPoints.push(p);
		}
		
		// for (let i = 0; i < landingPoints.length; i++) {
		// 	push();
		// 	stroke(48, 200, 255);
		// 	strokeWeight(5);
		// 	point(landingPoints[i][0], landingPoints[i][1], 10);
		// 	pop();
		// }
		
		let touchThreshold = 1;
		
		for (let i = 0; i < terr.lineList.length; i++) {
			let x1 = terr.lineList[i][0] - this.pos.x;
			let y1 = terr.lineList[i][1] - this.pos.y;
					
			for (let j = 0; j < landingPoints.length; j++) {
				let isTouching = abs(dist(x1, y1, landingPoints[j][0], landingPoints[j][1])) < touchThreshold;
				
				if (isTouching) {
					touchCount++;
				}
			}
			
		}
		
		pop();
		
		// print(touchCount);
		// print(touchCount/landingPoints.length);
			
		if (touchCount/landingPoints.length > 0.6) {
			return true;
		}
		else {
			return false;
		}
	}
	
	this.isVelocityAlmostZero = function() {
		let threshold = 1;
		if (this.vel.mag() < threshold) {
			return true;
		}
		else {
			return false;
		}
	}
	 
	this.accelerate = function(forceDir) {
		let forceVec = createVector(1, 0);
		let rotateAngle = 0;
		
		if (forceDir > 0) {
			this.isAccelerating = true;
			this.ongoingAccelerationTime++;
			
			rotateAngle = this.vel.heading();    
			
			this.initCombust();
		}
		else {
			if (this.isVelocityAlmostZero()) {
				//this.vel.setMag(1e-20);
				this.vel.setMag(0.8);
				return;
			}

			let currentVelAngle = this.vel.heading();

			// East
			if (currentVelAngle == 0.0) {
				rotateAngle = PI;
			}
			// North
			else if (currentVelAngle == 1.5) {
				rotateAngle = -PI/2;
			}
			// South
			else if (currentVelAngle == -1.5) {
				rotateAngle = PI/2;
			}
			// West
			else if (abs(currentVelAngle) == 3.0) {
				rotateAngle = 0;
			}
			// North-West or North-East
			else if (currentVelAngle > -3.0 && currentVelAngle < 0.0) {
				rotateAngle = this.vel.heading() + PI;
			}
			// South-East or South-West
			else if (currentVelAngle > 0.0 && currentVelAngle < 3.0) {
				rotateAngle = this.vel.heading() - PI;
			}      
		}
		
		forceVec.rotate(rotateAngle);
		
		if (! this.isHeadingWithinLandingAngle()) {
			if (forceDir > 0) {
				forceVec.setMag(this.regularThurstForce);
			}
			else {
				forceVec.setMag(this.regularBreakForce);
				forceVec.mult(this.regularBreakForce);
			}
		}
		else {
			if (forceDir > 0) {
				forceVec.setMag(this.landingAngleThurstForce);
			}
			else {
				forceVec.setMag(this.landingAngleBreakForce);
			}
		}
		
		this.thurst = forceVec;
	}

	this.changeAngle = function(rad) {
		this.vel.rotate(rad);
	}

	
	this.initCombust = function() {
		this.isCombusting = true;
		
		let i = 0;
		let j = this.combustLineVecList.length - 1;
		while (i < j) {
			this.combustLineVecList[i] = createVector(1, 0);
			this.combustLineVecList[j] = createVector(1, 0);
			let r = random(0, 0.8);
			this.combustLineVecList[i].rotate(r);
			this.combustLineVecList[j].rotate(-r);
			i++;
			j--;
		}
	}
	
	this.update = function() {
		if (this.pos.y > height) {
			this.isAlive = false;
		}
		
		if (this.isAlive) {
			this.acc.add(this.thurst);
			
			if (this.thurst.heading() > PI/4 && this.thurst.heading() < 3*PI/4) {
					this.pos.add(createVector(this.gravity.x, 2.5));
			}
			
			if (this.isHeadingWithinLandingAngle() && this.areFlapsDeployed) {
				this.pos.add(createVector(this.gravity.x, this.minPositionalGravity + this.freeFallTime * 0.05));
			}
			else {
				this.acc.add(this.gravity);
				this.pos.add(createVector(this.gravity.x, this.freeFallTime * 0.05));
			}
			
			this.vel.add(this.acc);

			if (this.areFlapsDeployed) {
				this.vel.limit(this.flappedTopSpeed);
			}
			else {
				this.vel.limit(this.regularTopSpeed);
			}
			
			this.pos.add(this.vel);
			
			
			this.thurst.mult(0);
			this.acc.mult(0);

			if (!this.isAccelerating) {
				this.ongoingAccelerationTime = 0;
				
				this.freeFallTime++;
				
				if (this.currentPositionalGravity < this.maxPositionalGravity) {
					this.currentPositionalGravity += 5;
				}
			}
			else {
				this.freeFallTime = 0;
				this.currentPositionalGravity = this.minPositionalGravity;
				this.gravity = createVector(0, this.minGravityForceVec);
			}

			if (this.isCombusting && this.currentCombustLineLen < this.maxCombustLineLen) {
				this.currentCombustLineLen += 1.5;
			}

			if (this.currentCombustLineLen >= this.maxCombustLineLen && !this.isAccelerating) {
				this.currentCombustLineLen = 0;
				this.isCombusting = false;
			}

			this.isAccelerating = false;
			
			
			//print("(" + this.vel.x + ", " + this.vel.y + ")");
			//print(this.vel.mag());
			//print(degrees(this.vel.heading()));
			//print(this.vel.heading());
			// print(this.freeFallTime);
		}
		else if (this.isExploding) {
			this.currentExplosionRadius += 10;
		}
		
		if (this.currentExplosionRadius > this.maxExplosionRadius) {
			this.isExploding = false;
		}
	}

	
	this.display = function() {
		if (this.isExploding) {
			push()
			
			noSmooth();
			stroke(252, 207, 3);
			strokeWeight(10);
			fill(214, 65, 39);
			ellipse(this.pos.x, this.pos.y, this.currentExplosionRadius);
			
			pop();
		}
		else if (this.isAlive) {
			push();

			noStroke();

			translate(this.pos.x, this.pos.y);

			//stroke(255, 255, 255);
			//line(0, 0, this.vel.x*20, this.vel.y*20);
			//noStroke();

			rotate(this.vel.heading());

			rectMode(CENTER);
			noStroke();
			fill(227, 230, 228);
			rect(0, 0, this.bodyHeight, this.bodyWidth);

			stroke(255, 255, 255);
			strokeWeight(1.25);
			noFill();
			beginShape(TRIANGLE_STRIP);
			vertex(-this.height/2                  , - this.bodyWidth - this.tailWidth         );
			vertex(-this.height/2 + this.tailHeight, - this.bodyWidth                          );
			vertex(-this.height/2                  , - this.bodyWidth / 2  - this.tailWidth / 2);
			vertex(-this.height/2 + this.tailHeight,   0                                       );
			vertex(-this.height/2                  ,   this.bodyWidth / 2  + this.tailWidth / 2);
			vertex(-this.height/2 + this.tailHeight,   this.bodyWidth                          );
			vertex(-this.height/2                  ,   this.bodyWidth + this.tailWidth         );
			endShape();


			stroke(0, 0, 0);
			strokeWeight(0.5);
			fill(0, 128, 128);
			//fill(138, 195, 227);
			triangle(this.bodyHeight/2, this.capWidth/2, this.bodyHeight/2, -(this.capWidth/2), this.bodyHeight/2 + this.capHeight, 0);



			// rectMode(CENTER);
			// noFill();
			// stroke(240, 77, 77);
			// strokeWeight(2);
			// let colliderRectList = this.getColliderRectList();
			// rect(colliderRectList[0][0], colliderRectList[0][1], colliderRectList[0][2], colliderRectList[0][3]);
			// rect(colliderRectList[1][0], colliderRectList[1][1], colliderRectList[1][2], colliderRectList[1][3]);
			// rect(colliderRectList[2][0], colliderRectList[2][1], colliderRectList[2][2], colliderRectList[2][3]);


			if (this.areFlapsDeployed) {
				stroke(255, 255, 255);
				strokeWeight(3);
				line(0, this.bodyWidth/2 - 15, 0, this.bodyWidth/2 + 10);
			} 
			
			
			pop();

			if (this.isCombusting) {
				this.displayCombustion();
			}
		}
		else {
			fill(255, 255, 255);
			textSize(16);
			textFont("Trebuchet MS");
			x = width/2.5;
			y = height/2;
			let strList = ["Houston, we have a problem."];
			for (let i = 0; i < strList.length; i++) {
				text(strList[i], x, y);
				y += 30;
			}
			//noLoop();
		}
	}

		
	this.displayCombustion = function() {
		push();
		
		if (this.ongoingAccelerationTime < 15) {
			stroke(232, 199, 67);
		}
		else if (this.ongoingAccelerationTime < 60) {
			stroke(252, 17, 0);
		}
		else {
			stroke(28, 0, 212);
		}
		
		translate(this.pos.x, this.pos.y);
		rotate(this.vel.heading());
		
		let i = 0;
		let j = this.combustLineVecList.length - 1;
		while (i < j) {
			this.combustLineVecList[i].setMag(this.currentCombustLineLen);
			this.combustLineVecList[j].setMag(this.currentCombustLineLen);
			line(-this.height/2, 0, -(this.height/2) - this.combustLineVecList[i].x + random(-15, 5), this.combustLineVecList[i].y);
			line(-this.height/2, 0, -(this.height/2) - this.combustLineVecList[j].x  + random(-15, 5), this.combustLineVecList[j].y);
			i++;
			j--;
		}
		
		pop();
	}
	
	this.explode = function() {
		this.isAlive = false;
		this.isExploding = true;
	}
	
	this.deployFlaps = function() {
		this.areFlapsDeployed = true;
	}
	
	this.closeFlaps = function() {
		this.areFlapsDeployed = false;
	}
}


// Rocket.prototype.getColliderRectList = function() {
//   let colliderRectList =  [
//                             [this.pos.x + (this.bodyHeight/2 + this.capHeight/2), this.pos.y + this.capWidth/32, this.capWidth, this.capHeight/2],
//                             [],
//                             []
//                           ];
//   return colliderRectList;
// }


function detectKeyPress() {
	if (keyIsDown(32)) {
		rocket.deployFlaps();
	}
	else {
		rocket.closeFlaps();
	}
	
	if (keyIsDown(UP_ARROW)) {
		rocket.accelerate(1);
		if (keyIsDown(RIGHT_ARROW)) {
			rocket.changeAngle(PI/32);
		} 
		else if (keyIsDown(LEFT_ARROW)) {
			rocket.changeAngle(-PI/32);
		}
	} 
	else if (keyIsDown(DOWN_ARROW)) {
		rocket.accelerate(-1);
	}
	
	
}

