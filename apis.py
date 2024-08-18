from flask import Flask,request

app = Flask(__name__)

data =[]
 
@app.route('/showdata',methods=['GET'])
def demo():
    return data

@app.route('/adddata',methods=['POST'])
def add():
     fdata = request.get_json()
     data.append(fdata["name"])
     return "data added"

@app.route('/removedata/<name>',methods=['DELETE'])
def delete(name):
    data.remove(name);
    return "data removed"

@app.route('/editdata/<name>',methods=["get"])
def edit(name):
    # sdata = set(data)
    if name in data:
        x = data.index(name)
        print(x)
        return {'index':x,'name':name}

@app.route('/updatedata',methods=['PUT'])
def update():
    fdata = request.get_json()
    data[fdata['index']] = fdata['name']
    return "data updated"


if __name__ == "__main__":
    app.run(port=5000, debug=True)