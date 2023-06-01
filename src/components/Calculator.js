import React from 'react';
import Button from './Button';

function Calculator() {
  const keys = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

  return (
    <section id="calculator">
      <input
        type="text"
        value="0"
        disabled
        id="exit"
      />
      <section id="input">
        <article id="digits">
          {
                        keys.map((but) => <Button key={but} text={but} />)
                    }
        </article>
      </section>
    </section>
  );
}

export default Calculator;
