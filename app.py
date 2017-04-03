from flask import Flask, render_template, request, session, redirect, url_for
app = Flask(__name__)


@app.route("/")
def main():
    return render_template('site.html')

@app.route("/totals/", methods="POST")
def totals():
	return render_template('totals.html')

@app.route("/delays/", methods="POST")
def delays():
	return render_template('delays.html')

if(__name__ == "__main__"):
    app.debug = True
    app.run();
