import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'IncubyteTestProject';

  constructor() {

  }

  ngOnInit() {
    console.log("Empty Input: " + this.Add(""));
    console.log("Handle N number of Inputs: " + this.Add("1,2,3,4"));
    console.log("Input Contains \\n: " + this.Add("1\n2,3"));
    console.log("Invalid Input Contains \\n:" + this.Add("1,\n"));
    console.log(this.Add("-1,-2,3"));
    console.log("Delimiter change: "+this.Add("//;\n1;2"));
  }

  public Add(params: string) {
    if (params) {
      params = params.replace(/\n|;/g, ',').replace(/\/\//g,'').replace(/^,,/,'');
      let paramsArray = params.split(',');
      let sum = 0;
      let isValidInput = true;
      let isNegativeInput = false;
      let negativeValues = "";
      if (paramsArray && paramsArray.length > 0) {
        for (let element of paramsArray) {
          if (element && +element >= 0) {
            sum = sum + +element;
          }
          else if (element && +element < 0) {
            isNegativeInput = true;
            negativeValues = negativeValues + element + ',';
          }
          else {
            isValidInput = false;
            break;
          }
        }
      }
      if (isNegativeInput) { return "Input Contains negative values i.e " + negativeValues.slice(0, -1); }
      else if (isValidInput) return sum;
      else
        return "Invalid Input";
    }
    else return 0;
  }
}
