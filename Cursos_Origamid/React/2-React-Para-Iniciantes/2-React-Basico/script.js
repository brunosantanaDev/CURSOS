const Button = () => {
  function abc() {
    alert('Clicou no Botão');
  }

  return <button onClick={abc}>Comprar</button>;
};

const App = () => {
  return (
    <>
      <div>Meu app em React</div>
      <Button />
    </>
  );
};
ReactDOM.render(<App />, document.querySelector('.app'));
