import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItems from './MealItems/MealItems';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Govinda\'s special',
      description: 'A satvik diet',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Indian Thali',
      description: 'Indian, raw, fry',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];
const AvailableMeals = () => {
      return (<section className={classes.meals}>
          <Card>
          <ul>
              {DUMMY_MEALS.map((item)=>{
                  return <MealItems 
                  key={item.id}
                  name={item.name}
                  description= {item.description}
                  price={item.price}
                  id={item.id}
                  />
              })}
          </ul>
          </Card>
      </section>)


};

export default AvailableMeals;