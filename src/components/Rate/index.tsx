import React, { useState} from 'react';

type Props = {
  callback: (value: number) => void;
};

const Rate: React.FC<Props> = ({callback}) => {

  const [value, setValue] = useState(5);

  return (
    <div>
      <input type='range'
        min='1'
        max='10'
        value={value}
        //@ts-ignore
        onChange={(e) => setValue(e.currentTarget.value)}
        />
      {value} Stars!
      <>
        <button onClick={()=>callback(value)}>Send rate</button>
      </>
    </div>
  )

}

export default Rate;
