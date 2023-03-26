import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import React, { useState } from 'react'

export default function Editor(props) {
    const [load, setLoad] = useState(false)

    const handleEditorChange = (content) => {
        // console.log(content);
        // props.setValueE('');
        if (load) {
            props.setValue(content);
        }
        else {
            setLoad(true)
        }
    }

    document.addEventListener('load', () => {
        setLoad(true)
    })


    return (
        <div>
            <CKEditor
                editor={ClassicEditor}
                id="short_descr"
                data={props.value}
                onReady={editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    handleEditorChange(data)
                }}
                onBlur={(event, editor) => {
                    // console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    // console.log('Focus.', editor);
                }}
            />
        </div>
    )
}
