

const reRender = async (element, component ) => {
    if(element){
        document.querySelector(element).innerHTML = await component.render();
    }
    if(component.afterRender){
        await component.afterRender();
    }

}
export default reRender;