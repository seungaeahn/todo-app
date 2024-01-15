const person = {
    name: 'Racheal Seungae Ahn',
    address: {
        line1: 'Central Town ro 22',
        city: 'Suwon',
        country: 'Korea',
    },
    profiles: ['twitter', 'linkedin', 'instagram'],
    printProfile: () => {
        person.profiles.map(
            profiles => console.log(profiles)
        )
    }

}

// function printPofile() {
//     console.log(person.profiles[0])
// }

export default function LearningJavaScript() {
    return (
        <>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.profiles[0]}</div>
            <div>{person.printProfile()}</div>
        </>
        
    )
}