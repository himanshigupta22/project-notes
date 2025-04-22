
export default function Cards(props) {
    return (
        <div className={`text-gray-800 mb-1 p-10 `}>

            <div className="mt-10">
                <h2>Title : {props.title}</h2>
                <h3>{props.content}</h3>
            </div>
            <div className="mt-4 text-sm text-gray-700">

                <h4>Name: {props.name}</h4>
                <h4>Code : {props.code}</h4>
                <h4>Teachers :{props.teacher}</h4>
            </div>
        </div>
    )
}

// title:
// content:
