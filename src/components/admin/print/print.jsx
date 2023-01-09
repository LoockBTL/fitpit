import { connect } from 'react-redux'
import { useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print'
import DeclarationsPrint from './declarationPrint'
import OrderPrint from './orderPrint'

const Print = ({ orders, declarations }) => {
  const [currentType, setCurrentType] = useState(orders)
  const [currentNumber, setCurrentNumber] = useState(orders[0])

  const printELement = useRef()
  const handlePrint = useReactToPrint({
    content: () => printELement.current,
    documentTitle: `Print`,
    onAfterPrint: () => alert('Success print'),
  })

  return (
    <div style={{ margin: 'auto 10px' }}>
      <div>
        <div>Что печатать?</div>
        <button
          onClick={() => {
            setCurrentType(orders)
            setCurrentNumber(orders[0])
          }}
        >
          Orders
        </button>
        <button
          onClick={() => {
            setCurrentType(declarations)
            setCurrentNumber(declarations[0])
          }}
        >
          Declarations
        </button>
      </div>
      <div>
        <div>Номер</div>
        <div style={{ display: 'flex' }}>
          {currentType === orders
            ? currentType.map((obj) => (
                <button
                  onClick={() => {
                    setCurrentNumber(obj)
                  }}
                >
                  {obj.name}
                </button>
              ))
            : currentType.map((obj) => (
                <button onClick={() => setCurrentNumber(obj)}>{obj._id}</button>
              ))}
        </div>
      </div>
      <button onClick={handlePrint}>Print</button>
      <div
        ref={printELement}
        style={{ width: '100%', height: window.innerHeight }}
      >
        {currentType === orders ? (
          <OrderPrint order={currentNumber} />
        ) : (
          <DeclarationsPrint declaration={currentNumber} />
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  orders: state.order,
  declarations: state.declarations,
})

export default connect(mapStateToProps)(Print)
