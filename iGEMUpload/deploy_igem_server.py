# import igem_wikisync as sync

# sync.run(
#     team='Waseda', # 'your_team_name',
#     # src_dir='dist', #'source_directory',
#     build_dir='iGEMUploadFolder', #'build_directory'
#     year=2020,
# )


import glob
import os
import shutil
import sys
from datetime import date
from hashlib import md5
from http.cookiejar import LWPCookieJar
from pathlib import Path

import mechanicalsoup

from igem_wikisync.browser import iGEM_login, iGEM_upload_file, iGEM_upload_page
from igem_wikisync.logger import logger
from igem_wikisync.files import CSSfile, HTMLfile, JSfile

# pylint: disable=too-many-instance-attributes, fixme


def run(team: str,
        # src_dir: str,
        build_dir: str,
        year=date.today().year,
        silence_warnings=False):
    '''
    Runs iGEM-WikiSync and uploads all files to iGEM servers
    while replacing relative URLs with those on the iGEM server.
    Mandatory Arguments:
        team: iGEM Team Name
        src_dir: Path to the folder where the source files are present
        build_dir: Path to the folder where the built files will be stored before uploading
    Optional Arguments:
        year: Subdomain for igem.org. Current year by default.
        silence_warnings: Broken link warnings are not printed to console if true. The log still contains everything.
    Returns:
        1: Incorrect input in function call.
        2: Connection problem.
        3: Invalid upload map.
        4: Failed to write/upload file.
    '''

    # * 1. CHECK AND FORMAT INPUTS
    if team is None or not isinstance(team, str):
        logger.critical('Please specify your team name.')
        sys.exit(1)


    if build_dir is None or not isinstance(build_dir, str):
        logger.critical('Please specify where your code should be temporarily stored ' +
                        'using the build_dir argument.')
        sys.exit(1)

    if not isinstance(year, int) or len(str(year)) > 4:
        logger.critical('Year should be a four digit integer.')
        sys.exit(1)

    if not isinstance(silence_warnings, bool):
        logger.critical('silence_warnings must have a boolean value.')
        sys.exit(1)

    config = {
        'team':      team,
        # 'src_dir':   src_dir,
        'build_dir': build_dir,
        'year': str(year),
        'silence_warnings': silence_warnings
    }

    # * 3. Create build directory
    if not os.path.isdir(build_dir):
        os.mkdir(build_dir)
        # ? error handling here?

    # * 4. Get iGEM credentials from environment variables
    credentials = {
        'username': os.environ.get('IGEM_USERNAME'),
        'password': os.environ.get('IGEM_PASSWORD')
    }

    # * 5. Load/create cookie file
    browser, cookiejar = get_browser_with_cookies()

    # * 6. Login to iGEM
    login = iGEM_login(browser, credentials, config)
    if not login:
        message = 'Failed to login.'
        logger.critical(message)
        sys.exit(2)

    # * 7. Save cookies
    # TODO: check if this works, might not
    cookiejar.save()


    print('test')
    # * 11. Build files and upload changed files
    uploaded_code = build_and_upload(browser, config)


def get_browser_with_cookies():
    """
    Creates a mechanicalsoup.StatefulBrowser() instance
    with cookies loaded from file, if exists.
    Returns:
        browser: mechanicalsoup.StatefulBrowser() instance
        cookiejar: browser cookiejar that can be saved after logging in
    """

    cookie_file = 'wikisync.cookies'
    cookiejar = LWPCookieJar(cookie_file)
    if os.path.exists(cookie_file):
        try:
            cookiejar.load()
        # in case file is empty
        except Exception:
            pass

    browser = mechanicalsoup.StatefulBrowser()
    # ? error handling here?
    browser.set_cookiejar(cookiejar)

    return browser, cookiejar


def build_and_upload(browser, config): 
    """
    Replaces URLs in files and uploads changed files.
    Arguments:
        files: Custom file cache
        browser: mechanicalsoup.StatefulBrowser instance
        config: Configuration for this run
        upload_map: custom upload map
    Returns:
        Dictionary with no. of 'html', 'css' and 'js' files uploaded
    """

    file_base = '../buildFolder/'
    all_files = glob.glob(file_base+'**', recursive=True)
    all_files.sort()

    for file_name in all_files: #upするファイル一覧
        extension = file_name[-2:]
        if extension == 'ml': #HTML
            file_object = HTMLfile(file_name, config)

        elif extension == 'ss': #CSS
            file_object = CSSfile(file_name, config)
            
        elif extension == 'js': #JS
            file_object = JSfile(file_name, config)

        else:
            continue
        # print(file_object.upload_URL)_ste=app, _extension=js, file-name=inspire.js,
        # paerent=../buildFolder/_nuxt/static/1602327010/inspire, 
        print(file_object._upload_path)


        path_str = str(file_object)            
        ext = file_object.extension


        # open file
        try:
            with open(file_object.path, 'r') as file:
                contents = file.read()
        except Exception:
            message = f'Could not open/read {file_object.path}. Skipping.'
            logger.error(message)
            continue  

        processed = str(contents)
        # upload
        successful = iGEM_upload_page(browser, processed, file_object.upload_URL)
        if not successful:
            message = f'Could not upload {str(file_object.path)}. Skipping.'
            logger.error(message)
            continue
                


run(
    team='Waseda', # 'your_team_name',
    # src_dir='dist', #'source_directory',
    build_dir='../buildFolder', #'build_directory'
    year=2020,
)

print('Finish upload!')