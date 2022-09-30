import * as React from 'react';
import { parse } from '../libs/parse';
import { sanitizer } from '../libs/sanitizer';
import '../App.css';


export const View = (props: any) => {
  const sanitized = sanitizer(props.value);
  
  const tf = parse(sanitized);
  return (
    <div style={{width: "50%"}}>
        <div dangerouslySetInnerHTML={{__html: tf}}></div>
    </div>
  )

}