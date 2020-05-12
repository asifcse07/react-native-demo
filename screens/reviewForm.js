import React from 'react';
import {View, Text, StyleSheet, Button, Image, TextInput} from 'react-native';
import {Formik} from 'formik';
import {globalStyles} from '../styles/global';

export default function ReviewForm({addReview}){
    return(
        <View>
            <Formik initialValues={{
                name: '', body: '', rating:''
            }} onSubmit={(values, action) => {
                action.resetForm()
                addReview(values)
            }}>
                {(props) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review Title'
                            onChangeText={props.handleChange('name')}
                            value={props.values.name}
                        />
                        <TextInput
                            multiline
                            style={globalStyles.input}
                            placeholder='Review details'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                        />
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Rating (1-5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType={'numeric'}
                        />
                        <Button title='submit' color='maroon' onPress={props.handleSubmit}/>
                    </View>
                )}
            </Formik>
        </View>
    )
}
