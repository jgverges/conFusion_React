import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Menu extends React.Component {
    constructor(props){
        super(props);
        console.log('Menu -> constructor');
    }
    componentDidMount(){
        console.log('Menu -> componentDidMount')
    }
    componentDidUpdate() {
        console.log('Menu -> componentDidUpdate')
    }
    render() {
        console.log('Menu-> render');
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1" key={dish.id}>
                <Card onClick={() => this.props.onClick(dish.id)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle tag="h5">{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );

    }
}

export default Menu;