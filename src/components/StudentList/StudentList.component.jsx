import React, {Component} from 'react'
import FavoriteAnimal from "../FavoriteAnimal/FavoriteAnimal.component"
class StudentList extends Component{
    constructor() {
        super();
        this.state = {
            student: [
                {
                id: 1,
                name: "Eddy",
                color: "chartreuse",
                school: "Nebula Academy",
              },
              {
                id: 2,
                name: "Chelsea",
                color: "purple",
                school: "Nebula Academy",
              },
              {
                id: 3,
                name: "Tauseef",
                color: "orange",
                school: "Nebula Academy",
              },
              {
                id: 4,
                name: "Maurice",
                color: "red",
                school: "Nebula Academy",
              },
              {
                id: 5,
                name: "D'aja",
                color: "blue",
                school: "Nebula Academy",
              },
              {
                id: 6,
                name: "Jasmine",
                color: "pink",
                school: "Nebula Academy",
              },
              {
                id: 7,
                name: "Anitria",
                color: "blue",
                school: "Nebula Academy",
              },
            ]
        }
    }render(){
        return(
            <div>{this.state.student.map((student) => (
                <div className="studentCard">
                  <h1>Hello {student.name}</h1>
                  <p>
                      {student.name} is a <school>Nebula</school> student'
                    </p>
                </div>
              ))}
              <FavoriteAnimal/>
            </div>
        )
    }
}
export default StudentList