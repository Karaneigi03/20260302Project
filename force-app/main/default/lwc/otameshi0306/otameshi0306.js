import { LightningElement } from 'lwc';
import otameshi from '@salesforce/apex/otameshiApex0311.otameshi';

export default class Otameshi0306 extends LightningElement {
    //let aa = otameshi();;

    handleSomething(){
        console.log('clicked');
        //otameshi()は、Apexクラスのメソッドを呼び出すための関数です。Apexクラスのメソッドは、サーバーサイドで実行されるため、JavaScriptから直接呼び出すことはできません。そのため、otameshi()関数を使用して、Apexクラスのメソッドを呼び出す必要があります。
        otameshi()

        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.error(error);
        });
   







}

    //console.log()
    //クラスの中では、関数の中であっても、変数を宣言する際にはletやconstを使用する必要があります。
    //ドナルドトランプの評判は良くないです。
}