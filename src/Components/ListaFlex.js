import React from "react"
import { ScrollView, View, FlatList, Text } from "react-native"

const alunos = [
  { id: 1, nome: "João", nota: 10 },
  { id: 2, nome: "Joana", nota: 5.4 },
  { id: 3, nome: "Luis", nota: 9.3 },
  { id: 4, nome: "Ana", nota: 6.8 },
  { id: 5, nome: "Bia", nota: 4.4 },
  { id: 6, nome: "Dumbledore", nota: 3.5 },
  { id: 7, nome: "Harry", nota: 6.7 },
  { id: 8, nome: "Elajah", nota: 7.2 },
  { id: 9, nome: "Chris", nota: 10 },

  { id: 10, nome: "João", nota: 10 },
  { id: 11, nome: "Joana", nota: 5.4 },
  { id: 12, nome: "Luis", nota: 9.3 },
  { id: 13, nome: "Ana", nota: 6.8 },
  { id: 14, nome: "Bia", nota: 4.4 },
  { id: 15, nome: "Dumbledore", nota: 3.5 },
  { id: 16, nome: "Harry", nota: 6.7 },
  { id: 17, nome: "Elajah", nota: 7.2 },
  { id: 18, nome: "Chris", nota: 10 }
]

const itemEstilo = {
  paddingHorizontal: 15,
  height: 50,
  backgroundColor: "#DDD",
  borderWidth: 0.5,
  borderColor: "#222",
  
  // Flex
  //justifyContent: 'space-around'
  alignItems: 'center',
  flexDirection: 'row', // faz main axis (eixo principal) ser a linha
  justifyContent: 'space-between'
}

export const Aluno = props => (
  <View style={itemEstilo}>
    <Text>Nome: {props.nome}</Text>
    <Text style={{ fontWeight: "bold" }}>Nota: {props.nota}</Text>
  </View>
)

export default props => {
  const renderItem = ({ item }) => {
      return <Aluno {...item} />
  }

  return (
      <ScrollView>
          <FlatList data={alunos} renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()} />
      </ScrollView>
  )

}
