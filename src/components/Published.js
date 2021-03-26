

const Published = ({ squestions }) => {
    console.log(squestions);
    return (
        <>
            <ul>
                {
                    squestions.map((value) => {
                        return (
                            <>
                                <li className="list-unstyled">
                                    <h4 className="text-warning">🐯 {"  "+value.question}</h4>

                                    <ol>
                                        {value.options.map((value2) => {
                                            return  <li className="text-danger"> <h5>{value2 }<input type='checkbox' className="ckeckbox"/> </h5></li>;
                                        })}
                                    </ol>

                                </li>
                            </>
                        )
                    })
                }

            </ul>
        </>
    )
}

export default Published;