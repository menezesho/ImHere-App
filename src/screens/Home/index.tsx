import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import { styles } from './styles';

import { Participant } from '@/src/components/Participant';

export function Home() {
    const participants = ['Henrique', 'João', 'Maria', 'Pedro', 'Ana', 'Paulo', 'Lucas', 'Mariana', 'Felipe', 'Carla', 'Marcos', 'Rafael'];

    function handleParticipantAdd() {
        if (participants.includes('Henrique')) {
            return Alert.alert('Participante presente', 'Henrique já está na lista de participantes');
        }
    }

    function handleParticipantRemove(name: string) {
        Alert.alert('Remover participante', `Deseja remover o participante ${name}?`, [
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