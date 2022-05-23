from flask import Flask, render_template, url_for, request

app = Flask(__name__)
app.config['BOOTSTRAP_SERVE_LOCAL'] = True

@app.route('/')
@app.route('/home')
def home():
    return render_template('index.html')

@app.route('/sprinkler_config', methods=['GET', 'POST'])
def sprinkler_config():
    return render_template('sprinkler_config.html')

@app.route('/preview')
def preview():
    return render_template('base.html', page_heading_title="Base Preview")

@app.route('/toggle_test', methods=['GET', 'POST'])
def toggle_test():
    data = request.data
    print(data)
    return render_template('toggle_test.html')

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')