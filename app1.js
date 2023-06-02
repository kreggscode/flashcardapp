import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FlashcardApp = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  const words = [
   
  { english: 'accept', dutch: 'accepteren' },
  { english: 'achieve', dutch: 'bereiken' },
  { english: 'act', dutch: 'handelen' },
  { english: 'add', dutch: 'toevoegen' },
  { english: 'admire', dutch: 'bewonderen' },
  { english: 'admit', dutch: 'toegeven' },
  { english: 'advise', dutch: 'adviseren' },
  { english: 'agree', dutch: 'akkoord gaan' },
  { english: 'aim', dutch: 'streven' },
  { english: 'announce', dutch: 'aankondigen' },
  { english: 'answer', dutch: 'antwoorden' },
  { english: 'apologize', dutch: 'excuses aanbieden' },
  { english: 'appear', dutch: 'verschijnen' },
  { english: 'argue', dutch: 'argumenteren' },
  { english: 'ask', dutch: 'vragen' },
  { english: 'attack', dutch: 'aanvallen' },
  { english: 'attempt', dutch: 'proberen' },
  { english: 'avoid', dutch: 'vermijden' },
  { english: 'believe', dutch: 'geloven' },
  { english: 'borrow', dutch: 'lenen' },
  { english: 'break', dutch: 'breken' },
  { english: 'bring', dutch: 'brengen' },
  { english: 'build', dutch: 'bouwen' },
  { english: 'buy', dutch: 'kopen' },
  { english: 'call', dutch: 'bellen' },
  { english: 'change', dutch: 'veranderen' },
  { english: 'choose', dutch: 'kiezen' },
  { english: 'clean', dutch: 'schoonmaken' },
  { english: 'close', dutch: 'sluiten' },
  { english: 'come', dutch: 'komen' },
  { english: 'complain', dutch: 'klagen' },
  { english: 'complete', dutch: 'voltooien' },
  { english: 'consider', dutch: 'overwegen' },
  { english: 'contain', dutch: 'bevatten' },
  { english: 'continue', dutch: 'doorgaan' },
  { english: 'cook', dutch: 'koken' },
  { english: 'count', dutch: 'tellen' },
  { english: 'create', dutch: 'creëren' },
  { english: 'cry', dutch: 'huilen' },
  { english: 'dance', dutch: 'dansen' },
  { english: 'decide', dutch: 'beslissen' },
  { english: 'deliver', dutch: 'leveren' },
  { english: 'describe', dutch: 'beschrijven' },
  { english: 'destroy', dutch: 'vernietigen' },
  { english: 'die', dutch: 'sterven' },
  { english: 'discuss', dutch: 'bespreken' },
  { english: 'do', dutch: 'doen' },
  { english: 'drink', dutch: 'drinken' },
  { english: 'drive', dutch: 'rijden' },
  { english: 'eat', dutch: 'eten' },
  { english: 'enjoy', dutch: 'genieten' },
  { english: 'explain', dutch: 'uitleggen' },
  { english: 'fall', dutch: 'vallen' },
  { english: 'feel', dutch: 'voelen' },
  { english: 'fight', dutch: 'vechten' },
  { english: 'find', dutch: 'vinden' },
  { english: 'finish', dutch: 'afronden' },
  { english: 'follow', dutch: 'volgen' },
  { english: 'forget', dutch: 'vergeten' },
  { english: 'forgive', dutch: 'vergeven' },
  { english: 'get', dutch: 'krijgen' },
  { english: 'give', dutch: 'geven' },
  { english: 'go', dutch: 'gaan' },
  { english: 'grow', dutch: 'groeien' },
  { english: 'happen', dutch: 'gebeuren' },
  { english: 'have', dutch: 'hebben' },
  { english: 'hear', dutch: 'horen' },
  { english: 'help', dutch: 'helpen' },
  { english: 'hide', dutch: 'verbergen' },
  { english: 'hit', dutch: 'slaan' },
  { english: 'hold', dutch: 'vasthouden' },
  { english: 'hope', dutch: 'hopen' },
  { english: 'hurt', dutch: 'pijn doen' },
  { english: 'include', dutch: 'bevatten' },
  { english: 'invite', dutch: 'uitnodigen' },
  { english: 'jump', dutch: 'springen' },
  { english: 'keep', dutch: 'houden' },
  { english: 'know', dutch: 'weten' },
  { english: 'laugh', dutch: 'lachen' },
  { english: 'learn', dutch: 'leren' },
  { english: 'leave', dutch: 'verlaten' },
  { english: 'let', dutch: 'laten' },
  { english: 'like', dutch: 'leuk vinden' },
  { english: 'listen', dutch: 'luisteren' },
  { english: 'live', dutch: 'leven' },
  { english: 'look', dutch: 'kijken' },
  { english: 'lose', dutch: 'verliezen' },
  { english: 'love', dutch: 'houden van' },
  { english: 'make', dutch: 'maken' },
  { english: 'meet', dutch: 'ontmoeten' },
  { english: 'miss', dutch: 'missen' },
  { english: 'move', dutch: 'bewegen' },
  { english: 'need', dutch: 'nodig hebben' },
  { english: 'open', dutch: 'openen' },
  { english: 'order', dutch: 'bestellen' }

    // Add the rest of the words here
  ];

  const handleNextCard = () => {
    setShowTranslation(false);
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  const handleToggleTranslation = () => {
    setShowTranslation((prevShowTranslation) => !prevShowTranslation);
  };

  const currentWord = words[currentWordIndex];

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        onPress={handleToggleTranslation}
      >
        <Text style={styles.word}>
          {showTranslation ? currentWord.dutch : currentWord.english}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleNextCard}>
        <Text style={styles.buttonText}>Next Card</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  word: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FlashcardApp;
