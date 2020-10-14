# Base Code : https://github.com/igembitsgoa/igem-wikisync/blob/master/src/igem_wikisync/files.py
import hashlib
from pathlib import Path


class BaseFile:
    '''
    Base class for all file objects. Not to be used directly.
    Use HTMLfile, CSSfile, JSfile or OtherFile instead.
    '''

    # pylint: disable=too-many-instance-attributes
    # Eight is reasonable in this case.

    def __init__(self, path, config):
        self._config = config

        self._path = Path(path)

        self._stem = str(self._path.stem)
        self._extension = str(self._path.suffix[1:]).lower()
        self._filename = str(self._stem + '.' + self._extension)
        self._parent = self._path.parent
        # self._src_path = self._config['src_dir'] / self._path
        self._build_path = self._config['build_dir']
        self._upload_URL = None  # URL of the upload form for file
        self._link_URL = None   # URL where the file will live

    @property
    def path(self):
        ''' Path of the file relative to src_dir. '''
        return self._path

    @property
    def filename(self):
        ''' Filename with extension. '''
        return self._filename

    @property
    def extension(self):
        ''' File extension. '''
        return self._extension

    # @property
    # def parent(self):
    #     ''' Path without the filename and terminal /. '''
    #     return self._parent

    # @property
    # def src_path(self):
    #     ''' Build path with src_dir. (src_dir/..)'''
    #     return self._src_path

    @property
    def build_path(self):
        ''' Build path with build_dir (build_dir/..). '''
        return self._build_path

    @property
    def upload_URL(self):
        ''' URL of the upload form for this file. '''
        return self._upload_URL

    @property
    def link_URL(self):
        ''' URL which can be used to link to this file. '''
        return self._link_URL

    @property
    def raw_URL(self):
        ''' URL where raw content can be found.
        Same as link_URL for JS and CSS.
        For HTML files, raw page content will be found,
        without wrapper iGEM HTML.
        '''
        return self._raw_URL


class HTMLfile(BaseFile):
    '''
    Container class that derives file properties for later use.
    :param path: File path relative to the current directory.
    :type path: str or :class:`pathlib.Path`
    '''

    def __init__(self, path, config):
        BaseFile.__init__(self, path, config)
        self._upload_path = self._generate_upload_path()
        self._upload_URL = self._generate_upload_URL()
        self._link_URL = self._generate_link_URL()
        self._raw_URL = self._generate_raw_URL()

    def _generate_upload_path(self):
        '''
            Returns upload path, which is the part of the URL after team name
            but before & and all. Includes / if required.
        '''

        # remove /index.html
        if 'index.html' in str(self.path):
            upload_path = str(self.path.parent).replace(self._build_path,'')
        else:
            upload_path = str(self.path.parent / self.path.stem).replace(self._build_path,'')

        if upload_path == '.':
            return ''
        else:
            return upload_path.replace('\\', '/')

    def _generate_upload_URL(self):
        '''
            Returns the URL of the iGEM page where this file can be uploaded.
            Private function. Use upload_URL to access instead.
        '''
        return 'https://' + self._config['year'] + '.igem.org/wiki/index.php?title=Team:' + \
            self._config['team'] + self._upload_path + '&action=edit'

    def _generate_link_URL(self):
        '''
            Returns the iGEM URL where this page will be found and can be linked to.
            Private function. Use link_URL to access instead.
        '''
        return 'https://' + self._config['year'] + '.igem.org/Team:' + self._config['team'] + \
            self._upload_path

    def _generate_raw_URL(self):
        '''
            Returns the iGEM URL where this page will be found and can be linked to.
            Private function. Use link_URL to access instead.
        '''
        return 'https://' + self._config['year'] + '.igem.org/wiki/index.php?title=Team:' + \
            self._config['team'] + self._upload_path + '&action=raw'

        


class CSSfile(BaseFile): #pass
    def __init__(self, path, config):
        BaseFile.__init__(self, path, config)
        self._upload_path = self._generate_upload_path()
        self._upload_URL = self._generate_upload_URL()
        self._link_URL = self._generate_link_URL()
        self._raw_URL = self._link_URL

    def _generate_upload_path(self):
        '''
            Returns upload path, which is the part of the URL after team name
            but before & and ?. Includes / if required.
        '''
        # remove file extension
        upload_path = self.path.parent / self.path.stem
        # add 'CSS'
        upload_path = str(upload_path).replace('.', '') + 'CSS'

        return '/' + upload_path.replace('\\', '/')

    def _generate_upload_URL(self):
        '''
            Returns the URL of the iGEM page where this file can be uploaded.
            Private function. Use upload_URL to access instead.
        '''
        return 'https://' + self._config['year'] + '.igem.org/wiki/index.php?title=Team:' + \
            self._config['team'] + self._upload_path + '&action=edit'

    def _generate_link_URL(self):
        '''
            Returns the iGEM URL where this page will be found and can be linked to.
        '''
        return 'https://' + self._config['year'] + '.igem.org/wiki/index.php?title=Team:' + self._config['team'] + \
            self._upload_path + '?action=raw&ctype=text/css'


class JSfile(BaseFile):
    def __init__(self, path, config):
        BaseFile.__init__(self, path, config)
        self._upload_path = self._generate_upload_path()
        self._upload_URL = self._generate_upload_URL()
        self._link_URL = self._generate_link_URL()
        self._raw_URL = self._link_URL

    def _generate_upload_path(self):
        '''
            Returns upload path, which is the part of the URL after team name
            but before & and all. Includes / if required.
        '''
        # remove file extension
        upload_path = str(self.path).replace(self._build_path,'')
    
        # add 'JS'
        upload_path = str(upload_path).replace('.js', '') + 'JS'

        return upload_path.replace('\\', '/')

    def _generate_upload_URL(self):
        '''
            Returns the URL of the iGEM page where this file can be uploaded.
            Private function. Use upload_URL to access instead.
        '''
        return 'https://' + self._config['year'] + '.igem.org/wiki/index.php?title=Team:' + self._config['team'] + \
            self._upload_path + '&action=edit'

    def _generate_link_URL(self):
        '''
            Returns the iGEM URL where this page will be found and can be linked to.
        '''
        return 'https://' + self._config['year'] + '.igem.org/wiki/index.php?title=Team:' + self._config['team'] + \
            self._upload_path + '?action=raw&ctype=text/javascript'
