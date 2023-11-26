import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAction } from '@wasp/actions';
import createPlant from '@wasp/actions/createPlant';

export function AddPlant() {
  const createPlantFn = useAction(createPlant);
  const [name, setName] = useState('');
  const [wateringFrequency, setWateringFrequency] = useState(1);

  const handleCreatePlant = () => {
    createPlantFn({ name, wateringFrequency });
    setName('');
    setWateringFrequency(1);
  };

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Add Plant</h1>
      <div className='flex flex-col gap-4 max-w-xs'>
        <input
          type='text'
          placeholder='Plant name'
          className='px-2 py-1 border rounded'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='number'
          min='1'
          placeholder='Watering frequency (days)'
          className='px-2 py-1 border rounded'
          value={wateringFrequency}
          onChange={(e) => setWateringFrequency(Number(e.target.value))}
        />
        <button
          onClick={handleCreatePlant}
          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
        >
          Create Plant
        </button>
        <Link to='/' className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Cancel</Link>
      </div>
    </div>
  );
}