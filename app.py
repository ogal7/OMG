from flask import Flask, render_template, request, session, redirect, url_for
import airlines

@app.route("/")
def main():
    return render_template('site.html')


if(__name__ == "__main__"):
    app.debug = True
    app.run();
