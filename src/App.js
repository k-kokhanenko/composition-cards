import './bulma.css';
import { Card } from './components/Card';
import { CardImage } from './components/CardImage';
import { CardHeader } from './components/CardHeader';
import { CardContent } from './components/CardContent';
import { CardFooter } from './components/CardFooter';

function App() {
  return (
    <>    
    <div className="container">
      <Card>
        <CardHeader title="Заголовок"/>        
        <CardImage url = "https://i.pinimg.com/originals/30/c0/b9/30c0b90a96c7ff56987a7c00bfd7c33a.jpg" placeholder='Пантера'/>
        <CardContent>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </CardContent>
        <CardFooter>
          <button class="button is-primary">Какая-то кнопка</button> 
        </CardFooter>
      </Card>      
    </div>
    </>
  );
}

export default App;
