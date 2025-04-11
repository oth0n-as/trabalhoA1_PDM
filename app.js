import React, { useState } from 'react';
import {
  View, Text, TextInput, Button, ScrollView, StyleSheet
} from 'react-native';

import {
  ROTULO_TITULO,
  ROTULO_NOME,
  ROTULO_TELEFONE,
  ROTULO_BOTAO,
  ROTULO_LISTA_NOME,
  ROTULO_LISTA_TELEFONE,
} from './labels';

export default function App() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [usuarios, setUsuarios] = useState([]);

  function cadastrarUsuario() {
    if (nome.trim() === '' || telefone.trim() === '') return;

    setUsuarios((atual) => [...atual, { nome, telefone }]);
    setNome('');
    setTelefone('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{ROTULO_TITULO}</Text>

      <View style={styles.form}>
        <Text>{ROTULO_NOME}</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />

        <Text>{ROTULO_TELEFONE}</Text>
        <TextInput
          style={styles.input}
          value={telefone}
          onChangeText={setTelefone}
          keyboardType="phone-pad"
        />

        <View style={styles.botao}>
          <Button title={ROTULO_BOTAO} color="#add8e6" onPress={cadastrarUsuario} />
        </View>
      </View>

      <View style={styles.divisor} />

      <View style={styles.cabecalhoLista}>
        <Text style={styles.cabecalhoTexto}>{ROTULO_LISTA_NOME}</Text>
        <Text style={styles.cabecalhoTexto}>{ROTULO_LISTA_TELEFONE}</Text>
      </View>

      <ScrollView>
        {usuarios.map((usuario, index) => (
          <View key={index} style={styles.itemLista}>
            <Text style={styles.itemTexto}>{usuario.nome}</Text>
            <Text style={styles.itemTexto}>{usuario.telefone}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#fff',
    flex: 1,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
    borderRadius: 3,
  },
  botao: {
    alignItems: 'center',
    marginTop: 5,
  },
  divisor: {
    height: 1,
    backgroundColor: '#000',
    marginVertical: 10,
  },
  cabecalhoLista: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  cabecalhoTexto: {
    fontWeight: 'bold',
  },
  itemLista: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  itemTexto: {
    fontSize: 16,
  },
});
