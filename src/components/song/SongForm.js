import { React, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { Formik, Form, } from 'formik';
import FormikControl from '../formik_custom/FormikControl';

function SongForm(props){
    const {song, title, onSubmit, isEditForm, validationSchema} = props;

    const initialValues = useMemo(() => ({
        name: song ? song.name : '',
        genre: song ? song.genre : '',
        singer: song ? song.singer : '',
        link: song ? song.link : '',
    }), [song]);

    return(
        <div className="container">
            <div className='title'>
                <h5>{title}</h5>
            </div>

            <Formik
                enableReinitialize={isEditForm ? true : false} 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {formik => { return (
                    <Form>
                        <div className="row mt-5">
                            <div className="col-md-4">
                                <FormikControl
                                    control='input'
                                    label='Name'
                                    name='name'
                                />
                            </div>
                            <div className="col-md-4">
                                <FormikControl
                                    control='input'
                                    label='Genre'
                                    name='genre'
                                />
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-md-4">
                                <FormikControl
                                    control='input'
                                    label='Singer'
                                    name='singer'
                                />
                            </div>
                            <div className="col-md-4">
                                <FormikControl
                                    control='input'
                                    label='Link'
                                    name='link'
                                />
                            </div>
                        </div>

                        <div className="row-sm-2 mt-3">
                            <button 
                                className="btn col" 
                                type="submit" 
                                disabled={isEditForm ? !formik.isValid : !(formik.isValid && formik.dirty)}
                            >
                                {isEditForm ? "Save" : "Create"}
                            </button>
                            <button className="btn col">
                                <NavLink to='/' className='link'><span>Back</span></NavLink>
                            </button>
                        </div>
                    </Form>
                )}}
            </Formik>
        </div>
    )
}

export default SongForm;