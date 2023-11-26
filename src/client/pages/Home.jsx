import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import getPlants from '@wasp/queries/getPlants';
import waterPlant from '@wasp/actions/waterPlant';

export function Home() {
  const { data: plants, isLoading, error } = useQuery(getPlants);
  const waterPlantFn = useAction(waterPlant);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-3xl font-bold'>My Plants</h1>
        <Link
          to='/add-plant'
          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
        >
          Add Plant
        </Link>
      </div>
      {plants.length === 0 ? (
        <p>No plants found.</p>
      ) : (
        <div className='grid gap-4 grid-cols-2'>
          {plants.map((plant) => (
            <div
              key={plant.id}
              className='bg-gray-100 p-4 rounded-lg flex justify-between items-center'
            >
              <div>
                <h2 className='text-xl font-bold'>{plant.name}</h2>
                <p className='text-gray-600'>Water in {plant.wateringFrequency} days</p>
              </div>
              <button
                onClick={() => waterPlantFn({ plantId: plant.id })}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              >
                Water
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}