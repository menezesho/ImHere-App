import React, { useState } from 'react';

import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import { Participant } from '@/src/components/Participant';

import { styles } from './styles';

export function Home() {
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('');

    function handleParticipantAdd() {
        if (participants.includes(participantName)) {
            return Alert.alert('Participante presente', `${participantName} já está na lista de participantes.`);
        }

        setParticipants([...participants, participantName]);
        setParticipantName('');
    }

    function handleParticipantRemove(name: string) {
        Alert.alert('Remover participante', `Deseja remover o participante ${name} ? `, [
            {
                text: 'Sim',
                onPress: () => Alert.alert('Participante removido', `O participante ${name} foi removido da lista de participantes.`)
            },
            {
                text: 'Não',
                style: 'cancel'
            },
        ]);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do evento</Text>
            <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='Nome do participante'
                    placeholderTextColor={'#6B6B6B'}
                    onChangeText={setParticipantName}
                    value={participantName}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleParticipantAdd}
                >
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)}
                    />
                )}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ainda não há participantes no evento
                    </Text>

                )}
            />

        </View>
    )
}