import React from 'react'

// Mendefinisikan komponen Counter sebagai kelas yang menerima props
class Counter extends React.Component {
  // Menginisialisasi state count dan step di dalam konstruktor kelas
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      step: 1
    };
  }

  // Membuat metode increment untuk menambahkan state count dengan state step
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + prevState.step
    }));
  }

  // Membuat metode decrement untuk mengurangi state count dengan state step
  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - prevState.step
    }));
  }

  // Membuat metode changeStep untuk mengubah state step berdasarkan input pengguna
  changeStep = (e) => {
    this.setState({
      step: Number(e.target.value)
    });
  }

  // Menampilkan elemen JSX yang merepresentasikan antarmuka pengguna
  render() {
    return (
      <div>
        {/* Menggunakan props title untuk menyesuaikan elemen h1 */}
        <h1>{this.props.title}</h1> 
        {/* Menggunakan state count untuk menampilkan nilai hitungan */}
        <p>Count: {this.state.count}</p>
         {/*// Menggunakan state step untuk menampilkan nilai langkah  */}
        <p>Step: {this.state.step}</p> 
        {/* // Menggunakan metode increment untuk menambahkan state count dengan state step */}
        <button onClick={this.increment}>+{this.state.step}</button> 
        {/* // Menggunakan metode decrement untuk mengurangi state count dengan state step */}
        <button onClick={this.decrement}>-{this.state.step}</button> 
        {/* // Menggunakan metode changeStep untuk mengubah state step berdasarkan input pengguna */}
        <input type="number" value={this.state.step} onChange={this.changeStep} /> 
      </div>
    );
  }
}

export default Counter