import {WorkInterface} from "../../application/interfaces/entities_interfaces/WorkInterface";
import {Work} from "../../entities/Work";
import * as _chai from "chai"
import {suite,test} from "@testdeck/mocha"
import {UserInterface} from "../../application/interfaces/entities_interfaces/UserInterface";
import {User} from "../../entities/User";

_chai.should();

@suite class WorkTest {
    _id:string
    employer: UserInterface
    description:{
        workDescription:string,
        address:string,
        payment:number,
        currency:"USD"|"EUR"|"UAH"|"RUB"|"PLZ"
    }
    SUT:WorkInterface

    before(){
        this.employer = new User("genabukin@gmail.com","12345678","Gena","Bukin","02.03.1995","male","Odesa","Owner")
        this.description = {
            workDescription:"This is simple work",
            address:"Odessa",
            payment:34.34,
            currency:"USD"
        }
        this.SUT = new Work(this.employer,this.description)
    }

    @test"Work is created"(){
        this.SUT.should.to.not.be.undefined
        this.SUT.should.have.property("_id").equal("no id")
        this.SUT.should.have.property("employer").deep.equal({
                _id: '2',
                email: 'genabukin@gmail.com',
                password: '12345678',
                firstname: 'Gena',
                secondname: 'Bukin',
                fullname: 'Gena Bukin',
                dateOfBirth: '02.03.1995',
                sex: 'male',
                place: 'Odesa',
                profession: 'Owner',
                avatar: null,
                telNumber: null,
                about: null,
                rating: null,
                history: [],
                reviews: [],
                certificates: [],
                passport: null,
                cardNumber: null,
                minPayment: null,
                currency: null
            }
        )
        this.SUT.should.have.property("employee").equal(null)
        this.SUT.should.have.property("description").deep.equal({
            workDescription:"This is simple work",
            address:"Odessa",
            payment:34.34,
            currency:"USD"
        })
        this.SUT.should.have.property("status").equal("awaiting")
        this.SUT.should.have.property("isStarted").equal(false)
        this.SUT.should.have.property("isEnded").equal(false)
        this.SUT.should.have.property("start").equal(null)
        this.SUT.should.have.property("end").equal(null)
        this.SUT.photos.should.to.be.an("array")
    }
}