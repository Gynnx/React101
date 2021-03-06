// const obj = {
//     name: 'Cyngynn',
//     getName() {
//         return this.name;
//     }
// };

// const getName = obj.getName.bind(obj);

// console.log(getName());


class IndecisionApp extends React.Component {
    render() {
      const title = 'Indecision';
      const subtitle = 'Put your life in the hands of a computer';
      const options = ['Thing one', 'Thing two', 'Thing four'];
  
      return (
        <div>
          <Header title={title} subtitle={subtitle} />
          <Action />
          <Options options={options} />
          <AddOption />
        </div>
      );
    }
  }
  
  class Header extends React.Component {
    render() {
      return (
        <div>
          <h1>{this.props.title}</h1>
          <h2>{this.props.subtitle}</h2>
        </div>
      );
    }
  }
  
  class Action extends React.Component {
    handlePick() {
        alert('handlePick');
    };
    render() {
      return (
        <div>
          <button onClick={this.handlePick}>What should I do?</button>
        </div>
      );
    }
  }
  
  class Options extends React.Component {
      constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
      };
      handleRemoveAll(){
        //   alert('RemoveAll')
        console.log(this.props.options);
        
      }
    render() {
      return (
        <div>
        <button onClick={this.handleRemoveAll}>
            Remove All   
        </button>
         <h1>Object Length: {this.props.options.length}</h1>
          {
            this.props.options.map((option) => <Option key={option} optionText={option}/>)
          }
         </div>
      );
    }
  }
  //<Option key={option} optionText={option} />
  
  class Option extends React.Component {
    render() {
      return (
        <div>
          Option: {this.props.optionText}
        </div>
      );
    }
  }
  
  class AddOption extends React.Component {
    handleAddOption(e){
        e.preventDefault();
        const text = e.target.elements.addOption.value.trim();
        if (text) {
            alert(text);
        };
        
    };
    render() {
      return (
        <div>
          <form onSubmit={this.handleAddOption}>
             <input type="text" id="addOption"></input>   
             <button>Add Option</button>
          </form>
        </div>
      );
    }
  }
  
  ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
  