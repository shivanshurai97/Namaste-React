
/* 
<div id="parent">
    <div id="child1">
        <h1>I am an H1 Tag</h1>
        <h2>I am an H2 Tag</h2>
    </div>
    <div id="child2">
        <h1>I am an H1 Tag</h1>
        <h2>I am an H2 Tag</h2>
    </div>
</div> 

ReactElement(object) =render> HTML(Browser can understand)
*/



// const heading  = React.createElement(
//     "h1",
//     { id: "heading"},
//     "Hello World from React!");

// console.log(heading) //object

const parent = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement(
            "div",
            {id:"child1"},
            [
                React.createElement("h1", {}, "I am an H1 Tag of child1"),
                React.createElement("h2", {}, "I am an H2 Tag of child1")
            ]
        ),
        React.createElement(
            "div",
            {id:"child2"},
            [
                React.createElement("h1", {}, "I am an H1 Tag of child2"),
                React.createElement("h2", {}, "I am an H2 Tag of child2")
            ]
        )
    ]
)

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);