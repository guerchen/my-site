import React from 'react';
import './contact.css';

function Contact() {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className='content'>
            <form classname='Form' onSubmit={handleSubmit}>
                <div>
                    <label for="fname">Nome completo:</label>
                    <input type="text" id="fname" name="fname" required={true} />
                </div>
                <div>
                    Quero:
                    <input type="radio" id="Comprar" name="transaction" value="HTML" />
                    <label for="html">Comprar/Vender</label>
                    <br />
                    <input type="radio" id="Alugar" name="transaction" value="CSS" />
                    <label for="css">Alugar</label><br />
                </div>
                <div>
                    Eu:
                    <input type="radio" id="tem" name="proprietario" value="HTML" />
                    <label for="html">Tenho um apartamento</label>
                    <br />
                    <input type="radio" id="ntem" name="proprietario" value="CSS" />
                    <label for="css">Busco um apartamento</label>
                </div>
                <div>
                    <label for="tel">Telefone:</label>
                    <input type="text" id="tel" name="tel" required={true} />
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" required={true} />
                </div>
                <div>
                    <input type="submit" className='Buttons' value="Entrar em contato!" />
                </div>
            </form>
        </div>
    );
  }
  
export { Contact };