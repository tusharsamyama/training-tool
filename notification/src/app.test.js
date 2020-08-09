const request = require("supertest");
const app = require("./app");

const nominationTestingData = require("./testData/nominationPostData");

describe('should pass with correct data', () => {
	it('post happens', done => {
		request(app)
		.post('/')
		.send(nominationTestingData.correct)
		.expect(200)
		.end((er, re) => {
			if(er) { return done(er) }
			done();
		})
	})
})

describe('should fail with incorrect nomination type', () => {
	it('post happens', done => {
		request(app)
		.post('/')
		.send(nominationTestingData.incorrectType)
		.expect(400)
		.end((er, re) => {
			if(er) { return done(er) }
			done();
		})
	})
})

// describe('should fail with incorrect name', () => {
// 	it('post happens', done => {
// 		request(app)
// 		.post('/')
// 		.send(nominationTestingData.incorrectName)
// 		.expect(400)
// 		.end((er, re) => {
// 			if(er) { return done(er) }
// 			done();
// 		})
// 	})
// })

// describe('should fail with incorrect email', () => {
// 	it('post happens', done => {
// 		request(app)
// 		.post('/')
// 		.send(nominationTestingData.incorrectEmail)
// 		.expect(400)
// 		.end((er, re) => {
// 			if(er) { return done(er) }
// 			done();
// 		})
// 	})
// })

// describe('should fail with incorrect training name', () => {
// 	it('post happens', done => {
// 		request(app)
// 		.post('/')
// 		.send(nominationTestingData.incorrectTraining)
// 		.expect(400)
// 		.end((er, re) => {
// 			if(er) { return done(er) }
// 			done();
// 		})
// 	})
// })