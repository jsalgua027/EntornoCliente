const Deseo = (props) => {
    return (
     <form onSubmit={props.reciboDeseo}>
        <input type="text" placeholder="inidique su deseo" name="deseo"></input>
     </form>
    );
  };
  export default Deseo;