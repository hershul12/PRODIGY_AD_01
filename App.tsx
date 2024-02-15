import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstValue, setFirstValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const handleNumberPress = (num) => {
    if (waitingForOperand) {
      setDisplayValue(String(num));
      setWaitingForOperand(false);
    } else {
      setDisplayValue(displayValue === '0' ? String(num) : displayValue + num);
    }
  };

  const handleOperatorPress = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (firstValue === null) {
      setFirstValue(inputValue);
    } else if (operator) {
      const currentValue = firstValue || 0;
      const newValue = operate(operator, currentValue, inputValue);

      setDisplayValue(String(newValue));
      setFirstValue(newValue);
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  const handleEqualsPress = () => {
    if (!operator) return;

    const inputValue = parseFloat(displayValue);
    const newValue = operate(operator, firstValue, inputValue);

    setDisplayValue(String(newValue));
    setFirstValue(null);
    setWaitingForOperand(true);
    setOperator(null);
  };

  const handleClearPress = () => {
    setDisplayValue('0');
    setFirstValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const operate = (operator, a, b) => {
    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '÷':
        return a / b;
      default:
        return b;
    }
  };
  return (
    <View style={{ gap: 100 }}>
      <View style={{ backgroundColor: "#40A2E3", alignItems: "center", justifyContent: "center",height:"11%" }}>
        <Text style={{ color: "white", fontSize: 40 }} >---------Calculator---------</Text>
      </View>
      <View>
        <Text style={{fontSize:35}}>{displayValue}</Text>
      </View>
      <View style={{ marginTop: 20, backgroundColor: "#E0F4FF", height: "80%", gap: -15 }}>
        <View style={{ flexDirection: "row",justifyContent:'space-between',margin:20 }}>
          <TouchableOpacity style={{ width: 40, height: 40 }} onPress={() => handleClearPress()}>
            <Text style={{ fontSize: 35 }}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontSize: 35 }}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={{ fontSize: 35 }}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontSize: 35 }}>C</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row",justifyContent:'space-between',margin:20 }}>
          <TouchableOpacity style={{ width: 40, height: 40 }} onPress={() => handleNumberPress(7)}>
            <Text style={{ fontSize: 35 }}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberPress(8)}>
            <Text style={{ fontSize: 35 }}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberPress(9)}>
          <Text style={{ fontSize: 35 }}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOperatorPress("*")}>
            <Text style={{ fontSize: 35 }}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row",justifyContent:'space-between',margin:20 }}>
          <TouchableOpacity style={{ width: 40, height: 40 }} onPress={() => handleNumberPress(4)}>
            <Text style={{ fontSize: 35 }}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberPress(5)}>
            <Text style={{ fontSize: 35 }}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberPress(6)}>
          <Text style={{ fontSize: 35 }}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOperatorPress("-")}>
            <Text style={{ fontSize: 35 }}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row",justifyContent:'space-between',margin:20 }}>
          <TouchableOpacity style={{ width: 40, height: 40 }}>
            <Text style={{ fontSize: 35 }}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontSize: 35 }}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={{ fontSize: 35 }}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontSize: 35 }}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row",justifyContent:'space-between',margin:20 }}>
          <TouchableOpacity style={{ width: 40, height: 40 }}>
            <Text style={{ fontSize: 35 }}>00</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontSize: 35 }}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={{ fontSize: 35 }}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEqualsPress}>
            <Text style={{ fontSize: 35 }}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default App;