window.onload = function () {

    //点击超链接以后，删除一个员工信息 

    //获取所有超链接
    function getA () {
        var allA = document.getElementsByTagName('a');
        //每个超链接都绑定一个单击响应函数
        for (var i = 0; i < allA.length; i++) {
            allA[i].onclick = function () {

                //点击超链接以后需要删除超链接所在那行
                //这里我们点击那个超链接this就是谁
                //获取当前tr
                var tr = this.parentNode.parentNode;

                //获取删除员工名字
                // var name = tr.getElementsByTagName('td')[0].innerHTML;
                var name = tr.children[0].innerHTML;
                //删除之前弹出一个对话框
                /*
                    confirm()用于弹出一个带有确认和取消按钮的对话框
                        需要一个字符串作为参数，该字符串会作为提升文字显示出来
                        如果用户点击确认则会返回true,取消则返回false
                */
                var flag = confirm("确认删除" + name + "吗?")
                //删除tr
                if (flag) {
                    tr.parentNode.removeChild(tr);
                }
                /*
                    点击超链接以后，超链接会跳转页面，这个超链接的默认行为
                    但是此时我们不希望出现默认行为，可以通过在响应函数的最后return false 来取消默认行为
                */
                return false;
            };
        }
    }

    var addEmpButton = document.getElementById('addEmpButton');
    addEmpButton.onclick = function () {
        //获取tr td父节点
        var employeeTable = document.getElementById('employeeTable');

        //获取empName的value值
        // var empName = document.getElementById('empName').value;
        // var email = document.getElementById('email').value;
        // var salary = document.getElementById('salary').value;
        var arr = [document.getElementById('empName').value, document.getElementById('email').value, document.getElementById('salary').value]
        var a = "<a href='javascript:;'>Delete</a>";
        var tr = document.createElement('tr');
        for (var i = 0; i < 3; i++) {
            var td = document.createElement('td');
            td.innerHTML = arr[i];
            tr.appendChild(td);


        } for (var i = 0; i === 0; i++) {
            var td = document.createElement('td');
            td.innerHTML = a;
            tr.appendChild(td);
        }
        employeeTable.appendChild(tr);
        getA();
    }
    getA();
}