import React from 'react';
import { VStack, Box,Text, Center, Input } from 'native-base';
import CreditCardDisplay from 'react-native-credit-card-display';
import Swiper from 'react-native-swiper';

const Compte =({navigation}) => {

    const [card, setCard] = React.useState({
        cardNumber: '',
        expirationDate: '',
        cvv: '',
        cardHolderName: '',
    });
    const [ flip, setFlip ] = React.useState(false);
    

    return (
        <VStack>
            <Box width={'100%'}>
                <Center >
                <CreditCardDisplay
                    number={4242424242424242}
                    cvc={123}
                    expiration="04/21"
                    name="John J. Doe"
                    fontSize={20}
                    flipped={flip}

                    
                    
                />
               
                </Center>
                <Center>
                    <Swiper>
                        <Box>
                            <Input placeholder="Card Number" onChangeText={(text) => setCard({...card, cardNumber: text})} />
                        </Box>
                        <Box>
                            <Input placeholder="Expiration Date" onChangeText={(text) => setCard({...card, expirationDate: text})} />
                        </Box>
                    </Swiper>
                </Center>
            </Box>
        </VStack>
    );
}

    export default Compte;

