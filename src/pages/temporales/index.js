import React from 'react';


class index extends React.Component {

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div style={{display: 'block'}}>
                <Tabs>

                    <Tab label="Misión">
                        <div>
                            <p>Ser la empresa lider en la región en la venta de zapatos al mayoreo</p>
                        </div>
                    </Tab>

                    <Tab label="Visión">
                        <div>
                            <p>Ser la empresa lider a nivel nacionqal, respetando el medio ambiente y contribuyendo a la
                                économia del pais</p>
                        </div>
                    </Tab>

                </Tabs>
            </div>
        )
    }

}

class Tabs extends React.Component {

    state = {
        activetab: this.props.children[0].props.label
    }

    changedTab = label => {
        this.setState({activetab: label})
    }

    render() {

        let content;
        let buttons = [];

        return (
            <div>
                {React.Children.map(this.props.children, child => {
                    buttons.push(child.props.label)
                    if (child.props.label === this.state.activetab)
                        content = child.props.children
                })}
                <TabsButtons
                    activeTab={this.state.activetab}
                    buttons={buttons}
                    changedTab={this.changedTab}
                />
                <div>{content}</div>
            </div>
        )
    }

}

const TabsButtons = ({buttons, changedTab, activeTab}) => {
    return (
        <div>
            {
                buttons.map((button, index) => {
                    return (
                        <button
                            key={index}
                            onClick={() => changedTab(button)}
                        >
                            {button}
                        </button>
                    )
                })
            }
        </div>
    )
}

const Tab = props => {
    return <React.Fragment>{props.children}</React.Fragment>
}

export default index;