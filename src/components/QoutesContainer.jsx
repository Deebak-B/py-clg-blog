import Container from 'react-bootstrap/Container';
import React from 'react';

function Quote() {
  return (
    <div className="Quote">
      <Container style={{
        display: 'grid',
        placeContent: 'center',
        backgroundColor: '#7286D3',
        padding: 50,
        marginTop: 30
      }} >
        <div style={{
          display: 'grid',
          placeContent: 'center',
          backgroundColor: '#8EA7E9',
          padding: 50

        }}>
          <h2 style={{

          }}>Colleges are hard to find,but you have us!</h2>
        </div>
      </Container>

    </div>
  );
}

export default Quote;
