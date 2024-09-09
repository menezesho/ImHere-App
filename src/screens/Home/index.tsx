import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

import { styles } from './styles';

import { Participant } from '@/src/components/Participant';

export function Home() {
    const participants = ['Henrique', 'João', 'Maria', 'Pedro', 'Ana', 'Paulo', 'Lucas', 'Mariana', 'Felipe', 'Carla', 'Marcos', 'Rafael'];

    function handleParticipantAdd() {
        console.log('Clicou no botão de adicionar participante');
    }

    function handleParticipantRemove(name: string) {
        console.log(`Clicou no botão para remover o participante ${name}`);
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
                        onRemove={() => handleParticipantRemove('Henrique')}
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