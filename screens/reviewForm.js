import React from 'react';
import {View, Text, StyleSheet, Button, Image, TextInput} from 'react-native';
import {Formik} from 'formik';
import {globalStyles} from '../styles/global';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const reviewSchema = yup.object({
    name: yup.string()
        .min(4)
        .required(),
    body: yup.string()
        .required()
        .min(6),
    rating: yup.string()
        .required()
        .test('is-num-1-5', 'Rating must be a num.', (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0
        })
})

export default function ReviewForm({addReview}){
    return(
        <View>
            <Formik initialValues={{name: '', body: '', rating:''}}
                    validationSchema={reviewSchema}
                    onSubmit={(values, action) => {
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
                            onBlur={props.handleBlur('name')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.name && props.errors.name}</Text>
                        <TextInput
                            multiline minHeight={60}
                            style={globalStyles.input}
                            placeholder='Review details'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                            onBlur={props.handleBlur('body')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Rating (1-5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType={'numeric'}
                            onBlur={props.handleBlur('rating')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
                        <FlatButton text={'submit'} onPress={props.handleSubmit}/>
                    </View>
                )}
            </Formik>
        </View>
    )
}
