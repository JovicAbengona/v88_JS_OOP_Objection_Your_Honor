class TrialCourt{
    static initiateTrial(defendant, prosecutor){
        this.defendant = defendant;
        this.prosecutor = prosecutor;
        const verdict = this.getVerdict();
        console.log(`Name: ${this.defendant.name}`);
        console.log(`Age: ${this.defendant.age} years old`);
        console.log(`Case Title: ${this.defendant.createdCase.title}`);
        console.log(`Filed By: ${this.prosecutor.name}`);
        console.log(`Verdict: ${verdict}`);

        if(verdict == "GUILTY"){
            console.log(`Released Date: ${this.defendant.createdCase.releaseDate}`);
        }
    }

    static getVerdict(){
        const verdict = (this.defendant.age >= this.defendant.createdCase.minAge && this.defendant.age <= this.defendant.createdCase.maxAge) ? "GUILTY" : "NOT GUILTY";
        return verdict;
    }
}

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Prosecutor extends Person{
    constructor(name, age){
        super(name, age);
    }

    prosecute(defendant, createdCase){
        defendant.createdCase = createdCase;
    }
}

class Defendant extends Person{
    constructor(name, age){
        super(name, age);
    }
}

class createdCase{
    constructor(title, years, months, days, minAge, maxAge){
        this.title = title;
        this.years = years;
        this.months = months;
        this.days = days;
        this.minAge = minAge;
        this.maxAge = maxAge;
        this.imprisonmentTerm = `${years} years, ${months} months, ${days} day/s`;
        this.ageLimit = `Between ${minAge} and ${maxAge}`;
        this.computeReleaseDate(new Date());
    }

    computeReleaseDate(startDate){
        this.startDate = startDate;
        let newDate = this.startDate.setFullYear(this.startDate.getFullYear() + this.years);
        newDate = this.startDate.setMonth(this.startDate.getMonth() + this.months);
        newDate = this.startDate.setDate(this.startDate.getDate() + this.days);
        let year = new Intl.DateTimeFormat('en', {year: 'numeric'}).format(newDate);
        let month = new Intl.DateTimeFormat('en', {month: 'short'}).format(newDate);
        let day = new Intl.DateTimeFormat('en', {day: '2-digit'}).format(newDate);

        this.releaseDate = `${month} ${day}, ${year}`;
    }
}