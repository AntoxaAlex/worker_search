import {User} from "../../entities/User";
import * as _chai from "chai"
import {suite,test} from "@testdeck/mocha"
import {WorkInterface} from "../../application/interfaces/entities_interfaces/WorkInterface";

_chai.should();

@suite class UserTest {
    public email:string
    public password:string
    public avatar:string
    public firstname:string
    public secondname:string
    public fullname:string
    public dateOfBirth:Date
    public sex:"male" | "female"
    public place:string
    public profession:string
    public telNumber:string | null
    public rating: number | null
    public reviews: string[]
    public history: WorkInterface[]
    public passport: string | null
    public certificates: string[]
    public about: string | null
    public cardNumber: number | null
    public minPayment: number | null
    public currency: string | null
    public SUT:User

    before(){
        this.email = "antoxaalex@gmail.com"
        this.password = "ballislife1995"
        this.firstname = "Anton"
        this.secondname = "Pertsevoy"
        this.dateOfBirth = new Date(1995,3,2)
        this.place = "Odessa"
        this.sex = "male"
        this.profession = "Developer"
        this.SUT = new User(this.email,this.password,this.firstname,this.secondname,this.dateOfBirth,this.sex,this.place,this.profession)
    }

    @test"User is created"(){
        this.SUT.should.to.not.be.undefined
        this.SUT.should.have.property("firstname").equal("Anton")
        this.SUT.should.have.property("secondname").equal("Pertsevoy")
        this.SUT.should.have.property("email").equal("antoxaalex@gmail.com")
        this.SUT.should.have.property("fullname").equal("Anton Pertsevoy")
        this.SUT.should.have.property("password").equal("ballislife1995")
        this.SUT.dateOfBirth.should.to.be.a("date")
        this.SUT.should.have.property("sex").equal("male")
        this.SUT.should.have.property("place").equal("Odessa")
        this.SUT.should.have.property("profession").equal("Developer")
        this.SUT.should.have.property("avatar").equal(null)
        this.SUT.should.have.property("telNumber").equal(null)
        this.SUT.should.have.property("rating").equal(null)
        this.SUT.reviews.should.to.be.an("array")
        this.SUT.history.should.to.be.an("array")
        this.SUT.certificates.should.to.be.an("array")
        this.SUT.should.have.property("passport").equal(null)
        this.SUT.should.have.property("currency").equal(null)
        this.SUT.should.have.property("minPayment").equal(null)
        this.SUT.should.have.property("about").equal(null)
        this.SUT.should.have.property("cardNumber").equal(null)
    }
}
