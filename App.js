// const heading = React.createElement('h1', {id:'heading'},"Hello Kanchi");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(heading,"heading")
// root.render(heading);

const parent = React.createElement('div', {id:'parent'},React.createElement('div', {id:'child'}, 
    [React.createElement('h1', {}, "I am prachi" ),  React.createElement('h1', {}, "I am prachi" )]));

    console.log(parent,"parent")

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(parent);